# Dinner Consensus

## A web app to help a group choose a cuisine they all like.

### User flow

1. Initial user creates a lobby and generates invite link
2. Participants each join via link
3. Participants are shown a list of common cuisines and rate each cuisine 😞 😐 😊
4. Upon submission of their ratings, they are shown a ranked list of cuisines that everyone agrees on.

- 😞 is heavily weighted to avoid any unhappiness with final outcome if possible.

## Installation

System Requirements:

- [Node.js](https://nodejs.org/) 18.17 or later.

1. Clone repo

```bash
git clone https://github.com/marten-sova/dinner-consensus.git
```

2. Install dependencies

```bash
cd ~/dinner-consensus

npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
