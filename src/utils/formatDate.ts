enum Month {
  Января,
  Февраля,
  Марта,
  Апреля,
  Мая,
  Июня,
  Июля,
  Августа,
  Сентября,
  Октября,
  Ноября,
  Декабря,
}

export const formatDate = (date: string) => {
  const splitedDate = new Date(date).toLocaleDateString().split("/");
  splitedDate[1] = Month[parseInt(splitedDate[1]) - 1];
  return splitedDate.join(" ");
};
