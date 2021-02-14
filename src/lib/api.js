let called = 0;

export const getUsers = async () => {
  const resp = await fetch(process.env.REACT_APP_USERS_URL);
  const data = await resp.json();

  if (resp.status !== 200) {
    throw new Error("Failed to load users list");
  }

  return data;
};

export const sendUsers = async (users) => {
  // Добавляем +1 к счетчику и каждый второй запрос возвращает ошибку
  called += 1;
  const route = called % 2 === 0 ? "/status/400" : "";
  const url = `${process.env.REACT_APP_USERS_SEND_URL}${route}`;

  const resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(users),
    headers: {
      // В реальном приложении секретный ключ должен добавляться в заголовки на сервере
      authorization: process.env.REACT_APP_SECRET_AUTH_TOKEN,
      "Content-Type": "application/json",
    },
  });

  const data = await resp.json();

  if (resp.status !== 200) {
    throw new Error("Failed to send users list");
  }

  return data;
};

const api = {
  getUsers,
  sendUsers,
};

export default api;
