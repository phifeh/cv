import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const dataDirectory = path.join(process.cwd(), "data");

export async function getSortedData(directory: string, withHTML?: boolean) {
  const dir = path.join(dataDirectory, directory);
  const fileNames = fs.readdirSync(dir);
  const allData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");
      const fullPath = path.join(dir, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      const processedContent =
        withHTML && (await remark().use(html).process(matterResult.content));
      console.log(processedContent?.toString);
      return {
        id,
        ...processedContent?{contentHTML: processedContent.toString()}:{},
        ...matterResult.data,
      };
    })
  );

  return allData.sort((a, b) => {
    if (a.id < b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllIds(directory: string) {
  const dir = path.join(dataDirectory, directory);
  const fileNames = fs.readdirSync(dir);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getDetailData(directory: string, id: string) {
  const dir = path.join(dataDirectory, directory);
  const fullPath = path.join(dir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
