import { stopwords } from "../Types/stopwords";

export const useTFIDF = ({ feedbacks }: { feedbacks: string[] }) => {
  // preprocess and convert to tokens
  const new_feedbacks: string[][] = feedbacks.map((feedback) =>
    feedback
      .toLowerCase()
      .split(" ")
      .filter((token) => !stopwords.includes(token.toLowerCase()))
  );

  // Tf-idf
  let words = [];
  for (let sentence of new_feedbacks) {
    for (let word of sentence) {
      words.push(word);
    }
  }

  const wordSet = new Set(words);
  const uniqueWords = [...wordSet];

  let numOfDocumentsContainingTerm: { [key: string]: number } = {};
  for (let word of uniqueWords) {
    let num_docs = 0;
    for (let sentence of new_feedbacks) {
      if (sentence.includes(word)) num_docs += 1;
    }
    numOfDocumentsContainingTerm[word] = num_docs;
  }

  let tf_idf: { [key: string]: number } = {};
  for (let sentence of new_feedbacks) {
    for (let word of sentence) {
      const tf = sentence.filter((w) => w === word).length / sentence.length;
      const idf = Math.log(
        feedbacks.length / numOfDocumentsContainingTerm[word]
      );
      const score = tf * idf;
      if (word in tf_idf) tf_idf[word] += score;
      else tf_idf[word] = score;
    }
  }

  let sortedEntries = Object.entries(tf_idf).sort((a, b) => b[1] - a[1]);
  return sortedEntries.slice(0, 10).map((element) => element[0]);
};
