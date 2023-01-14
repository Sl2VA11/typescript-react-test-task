export const priorityText = (title: string, summary: string, userText: string) => {
   let priority;
   const userTextLowerCase = userText.toLowerCase();
   const titleLowerCaseInclude = title.toLowerCase().includes(userTextLowerCase)
    const summaryLowerCaseInclude = summary.toLowerCase().includes(userTextLowerCase)

   if (titleLowerCaseInclude) {
      priority = 0
   } else if (summaryLowerCaseInclude) {
      priority = 1
   }

   return priority
}