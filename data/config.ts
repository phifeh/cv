import { getMaxAge } from "next/dist/server/image-optimizer";

export const SITE_NAME = "Philip Fehervari";
export const SITE_TITLE = "My resume site";

export const PRIVATE_INFORMATION = {
  birthDate: "1990-04-22",
  getAge() {
    const diff = new Date(+new Date() - +new Date(this.birthDate));
    return diff.getFullYear() - 1970;
  },
};
