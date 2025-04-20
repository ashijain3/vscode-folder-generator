// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require("fs");
const path = require("path");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
console.log("✅ Extension activated and running!");
function activate(context) {
	console.log("Folder Structure Generator is now active!");

	let generateCommand = vscode.commands.registerCommand("extension.generateFolderStructure", async function () {
		const document = await vscode.workspace.openTextDocument({
		  content: `# Enter your folder structure here
# You can use either of these formats:

# Format 1 (tree-like):
# src
# ├── app
# │   ├── layout.tsx
# │   └── page.tsx
# └── components
#     └── ExpenseForm.tsx

# Format 2 (indented):
# src/
#     app/
#         layout.tsx
#         page.tsx
#     components/
#         ExpenseForm.tsx
`,
		  language: "plaintext",
		});
	
		await vscode.window.showTextDocument(document);
		vscode.window.showInformationMessage(
		  'Enter your folder structure, then run the "Process Folder Structure" command'
		);
	  });
	
	  context.subscriptions.push(generateCommand);
  }
  

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
