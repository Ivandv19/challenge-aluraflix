import { createContext, useState, useContext, useEffect } from 'react';

// Creamos el contexto global
const GlobalContext = createContext();

// Definimos el proveedor global
export const GlobalProvider = ({ children }) => {

    //TODO 
    // Estado para almacenar la lista de videos
    const [videos, setVideos] = useState([]);

    // Función para obtener la lista de videos desde el servidor
    const fetchVideos = async () => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/IvandevI9/api_info_aluraflix/Videos');
            if (!response.ok) {
                throw new Error('Error al obtener los videos');
            }
            const data = await response.json();
            setVideos(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    // Efecto para cargar los videos al cargar el componente
    useEffect(() => {
        fetchVideos();
    }, []);


    // Filtrar los videos por la categoría "FRONT END"
    const [videosListadosFrontend, setVideosListadosFrontend] = useState([]);
    // Actualizar el estado de los videos listados al montar el componente
    useEffect(() => {
        // Filtrar los videos por la categoría "FRONT END" y actualizar el estado
        const videosFiltrados = videos.filter(video => video.Categoria === 'FRONT END');
        setVideosListadosFrontend(videosFiltrados);
    }, [videos]); // Dependencia en `videos` para actualizar si cambia


    // Filtrar los videos por la categoría "BACK END"
    const [videosListadosBackend, setVideosListadosBackend] = useState([]);
    // Actualizar el estado de los videos listados al montar el componente
    useEffect(() => {
        // Filtrar los videos por la categoría "BACK END" y actualizar el estado
        const backendVideos = videos.filter(video => video.Categoria === 'BACK END');
        setVideosListadosBackend(backendVideos);
    }, [videos]);

    // Filtrar los videos por la categoría "INNOVACIÓN Y GESTIÓN"
    const [videosListadosInnoyGest, setVideosListadosInnoyGest] = useState([]);
    // Actualizar el estado de los videos listados al montar el componente
    useEffect(() => {
        // Filtrar los videos por la categoría "INNOVACIÓN Y GESTIÓN" y actualizar el estado
        const iygVideos = videos.filter(video => video.Categoria === 'INNOVACIÓN Y GESTIÓN');
        setVideosListadosInnoyGest(iygVideos);
    }, [videos]);




    //estado para controlar la seleccion de  los botones
    const [botonSeleccionado, setBotonSeleccionado] = useState('HOME');

    const handleButtonClick = (buttonName) => {
        setBotonSeleccionado(buttonName);
    }


    // Estado para controlar el modal
    const [Modal, setModal] = useState(false);

    // Función para abrir el modal
    const openModal = () => {
        setModal(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setModal(false);
        setVideoSeleccionado(null); // Restablece el estado del video seleccionado
        setVideoAEditar({}); // Restablece el estado del video a editar
    };

    // Función para añadir un nuevo video
    const postVideo = async (newVideo) => {
        try {
            const response = await fetch('https://my-json-server.typicode.com/IvandevI9/api_info_aluraflix/Videos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newVideo),
            });
            if (!response.ok) {
                throw new Error('Error al agregar el video');
            }
            const data = await response.json();
            console.log('Video added successfully:', data);
            setVideos([...videos, data]);
        } catch (error) {
            console.error('Error adding video:', error);
        }
    };

    // Función para editar un video existente
    const editVideo = async (id, updatedFields) => {
        try {
            const response = await fetch(`https://my-json-server.typicode.com/IvandevI9/api_info_aluraflix/Videos/${id}`, {
                method: 'PATCH', // Utilizando PATCH para actualizaciones parciales
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFields),
            });

            if (!response.ok) {
                throw new Error(`Error al editar el video: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('Video editado correctamente:', data);

            // Actualizar el estado de videos
            setVideos(prevVideos =>
                prevVideos.map(video => (video.id === id ? data : video))
            );
        } catch (error) {
            console.error('Error al editar el video:', error);
            // Puedes lanzar el error si es necesario para manejarlo en otros lugares
            throw error;
        }
    };

    const [videoSeleccionado, setVideoSeleccionado] = useState(null);
    const [videoAEditar, setVideoAEditar] = useState({});

    const handleVideoSelec = async (id) => {
        setVideoSeleccionado(id);

    };

    // Usa useEffect para verificar el valor actualizado del estado
    useEffect(() => {
        if (videoSeleccionado !== null) {
            // Filtra el video seleccionado basándote en el ID
            const videoSelec = videos.find(video => video.id === videoSeleccionado) || {};
            console.log('ID recibido en el modal:', videoSeleccionado);
            setVideoAEditar(videoSelec);
            openModal();


        }
    }, [videoSeleccionado]);


    // Función para eliminar un video
    const deleteVideo = async (id) => {
        try {
            const response = await fetch(`https://my-json-server.typicode.com/IvandevI9/api_info_aluraflix/Videos/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el video');
            }
            console.log('Video eliminado correctamente', id);
            // Actualizamos la lista de videos eliminando el video con el id especificado
            setVideos(videos.filter(video => video.id !== id));
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };
    //Función para eliminar un video
    const handleDeleteClick = async (id) => {
        console.log('ID recibido en el contexto:', id); // Verifica el valor aquí

        try {
            await deleteVideo(id); // Llama a la función deleteVideo con el id del video
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    // Proporcionamos el contexto global a los componentes hijos
    return (
        <GlobalContext.Provider value={{
            Modal,
            openModal,
            closeModal,
            videos,
            postVideo,
            editVideo,
            deleteVideo,
            botonSeleccionado,
            handleButtonClick,
            handleDeleteClick,
            handleVideoSelec,
            videoSeleccionado,
            videoAEditar,
            videosListadosFrontend,
            videosListadosBackend,
            videosListadosInnoyGest
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Hook personalizado para consumir el contexto global
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};