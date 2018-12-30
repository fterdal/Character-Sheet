# Character Sheet (Work in Progress)

To get started:

1. Clone this repo: `git clone https://github.com/fterdal/Character-Sheet`
2. Install dependencies: `npm i`
3. Dance like no one's watching 🕺 💃 🕺 💃 🕺 💃
4. Start webpack-dev-server: `npm start`
5. Go to http://localhost:8080

## Goals

Store the character sheet data in the address bar so that sharing the link will unwrap the whole sheet for the viewer. On every change, the address bar updates, so that sharing the new link shares the new sheet. No user accounts needed.

### Stretch Features
* Compress the address bar somehow
* Export as YAML, JSON, Markdown
* Create Bitly link
* Encrypt the data with a passcode
* Customizable, users can add /remove fields as needed (even start from blank)
* Form validation (maybe even that is customizable?!)
* Real-time collaboration ala websockets (that might require user accounts though)
