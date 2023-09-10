import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MarvelService } from "../services/marvel.service";
import { Character } from "../types/marvel.type";

const useGetCharacterDetail = (service: MarvelService) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    (async () => {
      const data = await service.getCharacterDetail(id as string);
      setCharacter(data);
      setIsLoading(false);
    })();
  }, []);

  return { isLoading, character };
};
export default useGetCharacterDetail;
