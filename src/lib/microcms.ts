import type { Pokemon } from '../types/pokemon';

type Message = {
  id?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  updatedAt?: Date;
  data: {
    pokemon: Pokemon[];
  };
};

type Data = {
  id: string;
  message: Message;
};

type Style = {
  id: string;
  message: any;
};

const url = `https://ryusou-pokemon.microcms.io`;

export const microcmsPostData = (data: Data) => {
  window.parent.postMessage(
    {
      ...data,
      action: 'MICROCMS_POST_DATA',
    },
    url,
  );
};

export const microcmsUpdateStyle = (style: Style) => {
  window.parent.postMessage(
    {
      ...style,
      action: 'MICROCMS_UPDATE_STYLE',
    },
    url,
  );
};
