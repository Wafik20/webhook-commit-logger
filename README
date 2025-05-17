# 📦 GitHub Webhook Commit Logger

A simple Node.js + Express server that listens for GitHub push events via webhooks. On each push, it logs detailed information about the commits — including diffs fetched from the GitHub API.

---

## 🚀 Features

- Listens for `push` events on the `/webhook` endpoint.
- Logs:
  - Repository name
  - Branch name
  - Pusher details
  - Commit messages and metadata
  - Added, modified, and removed files
  - Full commit diffs via the GitHub API

---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **body-parser**
- **dotenv**
- **GitHub REST API**

---

## 📦 Installation

1. **Clone this repo**

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```env
GITHUB_TOKEN=your_personal_access_token
```

Make sure your token has **repo** scope to read commits.

---

## 🚀 Running the Server

```bash
node index.js
```

The server will start on:

```
http://localhost:3000
```

---

## 📡 Setting Up the GitHub Webhook

1. Go to your GitHub repository → **Settings** → **Webhooks**
2. Click **Add webhook**
3. Set:
   - **Payload URL**: `http://your-server-url/webhook`
   - **Content type**: `application/json`
   - **Secret**: (optional)
4. Select **Just the push event**
5. Click **Add webhook**

---

## 📑 Example Output

```
📥 Received a push event:
📝 Repo: your-user/your-repo
🌿 Branch: main
👤 Pusher: John Doe (john@example.com)
---
🔸 Commit: 123abc456def
📝 Message: Update README and fix webhook handler
👤 Committer: John Doe (john@example.com)
🌐 URL: https://github.com/your-user/your-repo/commit/123abc456def
📦 Added files: README.md
📝 Modified files: index.js, package.json
❌ Removed files: old_script.js
📝 Diff:
diff --git a/README.md b/README.md
new file mode 100644
index 0000000..e69de29
...
```

---

## 📌 Notes

- This server should be publicly accessible to receive GitHub webhook requests — you can use [ngrok](https://ngrok.com/) during local development.
- Ensure your GitHub token is kept secret and has appropriate permissions.

---

## 📄 License

MIT
