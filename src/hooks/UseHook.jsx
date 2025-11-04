import { useEffect, useState } from "react";

function UseHook(api) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  // GET
  const fetchData = async () => {
    setPending(true);
    try {
      const res = await fetch(api);
      if (!res.ok) throw new Error(res.statusText + " " + res.status);
      const result = await res.json();
      setData(result);
      console.log("Fetched data:", result);
    } catch ({ message }) {
      setError(message);
    } finally {
      setPending(false);
    }
  };

  // CREATE
  const createUser = async (newUser) => {
    try {
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) throw new Error(`${res.statusText} ${res.status}`);
      const created = await res.json();
      setData((prev) => (prev ? [...prev, created] : [created]));
    } catch (err) {
      setError(err.message);
    }
  };

  // DELETE
  const deleteUser = async (id) => {
    setPending(true);
    try {
      const res = await fetch(`${api}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Something went wrong");
      setData((prev) => prev.filter((user) => user.id !== id));
    } catch (err) {
      setError(err.message);
    } finally {
      setPending(false);
    }
  };

  // UPDATE
  const updateData = async (id, updatedUser) => {
    setPending(true);
    try {
      const res = await fetch(`${api}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
      if (!res.ok) throw new Error(`${res.statusText} ${res.status}`);
      const dataFromServer = await res.json();
      setData((prev) =>
        prev.map((user) =>
          user.id === id ? { ...user, ...dataFromServer } : user
        )
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [api]);

  const formData = (form) => {
    const newData = new FormData(form);
    return Object.fromEntries(newData.entries());
  };

  return { data, error, pending, formData, createUser, deleteUser, updateData };
}

export { UseHook };
