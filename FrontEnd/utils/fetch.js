import globals from "../Global";

//Obtener información del usuario

const getUserInfo = async (email, setData, setIsLoading, setError) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${globals.IP}/userinfo/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setData(data.data);
      } else {
        alert("Error al obtener la información del usuario");
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
};

// Actualizar información del usuario

const updateUserInfo = async (textButton, email, imageName, setIsLoading, setError) => {
    setIsLoading(true);
    try {
        const body = {
            icon: textButton === "Crear perfil" ? imageName : "User" || null,
        }
      const response = await fetch(`${globals.IP}/update/${email}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
       await response.json();
      } else {
        alert("Error al cambiar el icono");
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
};


export { getUserInfo, updateUserInfo }