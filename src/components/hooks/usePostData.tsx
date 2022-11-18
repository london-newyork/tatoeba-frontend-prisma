import { useState } from "react";

export const usePostData = () => {
  const [postData, setPostData] = useState<string | undefined | []>();
  return { postData, setPostData };
};
