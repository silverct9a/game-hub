import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
    background_image: string;
}

const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;