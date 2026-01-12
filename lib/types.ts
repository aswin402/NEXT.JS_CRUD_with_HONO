export type ArtCardProps = {
  art: {
    id: number;
    artname: string;
    artist: string;
    description?: string;
    price: string;
    imageUrl?: string;
  };
};

export type AlertSuccessProps = {
  title?: string;
  description?: string;
};


export type DestructiveAlertProps = {
  title?: string;
  description?: string;
};

export type Art = {
  id: number;
  artname: string;
  artist: string;
  price: number;
};