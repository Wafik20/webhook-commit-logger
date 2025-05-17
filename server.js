import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    const payload = req.body;

    console.log('📥 Received a push event:');
    console.log(`📝 Repo: ${payload.repository.full_name}`);
    console.log(`🌿 Branch: ${payload.ref.replace('refs/heads/', '')}`);
    console.log(`👤 Pusher: ${payload.pusher.name} (${payload.pusher.email})`);
    console.log('---');

    for (const commit of payload.commits) {
        console.log(`🔸 Commit: ${commit.id}`);
        console.log(`📝 Message: ${commit.message}`);
        console.log(`👤 Committer: ${commit.committer.name} (${commit.committer.email})`);
        console.log(`🌐 URL: ${commit.url}`);
        console.log(`📦 Added files: ${commit.added?.join(', ') || 'None'}`);
        console.log(`📝 Modified files: ${commit.modified?.join(', ') || 'None'}`);
        console.log(`❌ Removed files: ${commit.removed?.join(', ') || 'None'}`);

        const diffText = await fetchCommitDiff(payload.repository.full_name, commit.id);
        console.log(`📝 Diff:\n${diffText}`);
        console.log('---');
    }

    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`🚀 Webhook server listening on http://localhost:${PORT}`);
});

async function fetchCommitDiff(repoFullName, commitId) {
    const apiUrl = `https://api.github.com/repos/${repoFullName}/commits/${commitId}`;
    try {
        console.log(`🔍 Fetching diff for commit: ${apiUrl}`);
        const response = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3.diff',
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`GitHub API responded with status ${response.status}`);
        }

        const diffText = await response.text();
        return diffText;
    } catch (error) {
        console.error(`❌ Error fetching diff from ${apiUrl}:`, error.message);
        return `⚠️ Could not fetch diff: ${error.message}`;
    }
}
