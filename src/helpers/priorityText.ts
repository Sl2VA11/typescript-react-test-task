export const priorityText = (
  title: string,
  currentSummary: string,
  userText: string
) => {
  let priority;

  const userTextLowerCase = userText.toLowerCase();
  const titleLowerCaseInclude = title.toLowerCase().includes(userTextLowerCase);
  const summaryLowerCaseInclude = currentSummary
    .toLowerCase()
    .includes(userTextLowerCase);

  if (titleLowerCaseInclude) {
    priority = 0;
  } else if (summaryLowerCaseInclude) {
    priority = 1;
  }

  return priority;
};
