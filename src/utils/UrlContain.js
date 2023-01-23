export const urlContain = (url = "") => {
  if (url.includes("ipfs://")) {
    return `https://ipfs.io/ipfs/${url.replace("ipfs://", "")}`;
  } else {
    return url;
  }
};
