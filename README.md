# LLM-API-Front-end
A simple local end-to-end chat system based on the MiniMind language model. This project includes a FastAPI backend serving as an OpenAI-compatible API, a web-based chat frontend, and a Node.js static file server for local deployment and privacy-friendly usage.

---

## Features

- **Local OpenAI-compatible API**  
  FastAPI backend serving `/v1/chat/completions` for chat with streaming support.
- **Simple Web Frontend**  
  Clean chat interface with message history, localStorage support, and mobile-friendly design.
- **Node.js Static Server**  
  Serves the frontend at [http://localhost:8000/test_v2.html](http://localhost:8000/template.html).
- **Easy Setup**  
  No cloud needed. All runs locally for maximum privacy.
- **History Management**  
  Chat history is automatically saved in your browser and can be cleared anytime.

---
## Quick Start

### 1. Start the Python API Server

Install Python dependencies:
```bash
pip install torch transformers fastapi uvicorn pydantic
```
Then run:
```bash
python serve_openai_api.py
```
### 2. Start the Node.js Static Server
Install Node.js and Express if not already:
```bash
npm install express
```
Then run:
```bash
node server.js
```
### 3. Put your .pth file in ./out dir
download example model here: https://www.modelscope.cn/datasets/gongjy/minimind_dataset/files
## Usage
- Open your browser and go to http://localhost:8000/template.html.

- Type your question and chat with the MiniMind model.

- Chat history is saved locally in your browser. Click "Clear History" to remove.

## MiniMind is a powerful and friendly LLM framework, this project is based on MiniMind. To find MiniMind, go to https://github.com/jingyaogong/minimind.
