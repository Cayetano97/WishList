import globals from "../Global";

//Obtener listas de un usuario

const getLists = async (id, setData, setIsLoading, setError) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${globals.IP}/lists/${id}`, {
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


export { getLists, updateLists }