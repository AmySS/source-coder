const path = require("path");
const fs = require("fs");

const [fileDir, filename] = process.argv.slice(2);

const filePaths = readDir(fileDir);

let buffer = new Buffer.from("");
filePaths.forEach((filePath) => {
	const content = fs.readFileSync(filePath);
	buffer = Buffer.concat([buffer, new Buffer.from("\n"), content]);
});

fs.writeFileSync(
	`${__dirname}/out/${filename || new Date().getTime()}-${
		buffer.toString().length
	}.txt`,
	buffer
);

/**
 * 读取文件目录，返回所有文件的路径
 * @param {*} filePath
 * @returns filePaths[]
 */
function readDir(filePath) {
	const readdirResult = fs.readdirSync(filePath);
	const allFilePaths = [];
	readdirResult.forEach((name) => {
		const file_path = `${filePath}/${name}`;
		const stat = fs.lstatSync(file_path);
		if (stat.isDirectory()) {
			allFilePaths.push(...readDir(file_path));
		} else {
			if (
				file_path.indexOf(".json") !== -1 ||
				file_path.indexOf(".png") !== -1 ||
				file_path.indexOf(".svg") !== -1 ||
			) {
				return;
			}
			allFilePaths.push(file_path);
		}
	});
	return allFilePaths;
}
