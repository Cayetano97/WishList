import globals from "../Global";

//Crear una lista
const createList = async (id_user, list_name, icon, setIsLoading, setError) => {
    setIsLoading(true);
    try {
      const body = {
        id_user: id_user,
        list_name: list_name,
        icon: icon,
        id_collection: null,
        person_associated: null,
        shared: false,
      };
      const response = await fetch(`${globals.IP}/newlist/${id_user}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        await response.json();
      } else {
        alert("Error al crear la lista.");
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
};

//Obtener listas de un usuario

const getLists = async (id_user, setData, setIsLoading, setError) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${globals.IP}/lists/${id_user}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setData(data.data);
      } else {
        alert("Error al obtener las listas de un usuario");
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
  setIsLoading(false);
};

// Actualizar listas de un usuario

const updateLists = async (id, setIsLoading, setError) => {
    setIsLoading(true);
    try {
        const body = {
          products: [], //CORREGIR
        }
      const response = await fetch(`${globals.IP}/updatelist/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
       await response.json();
      } else {
        alert("Error al actualizar la lista.");
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
};


export { createList, getLists, updateLists }