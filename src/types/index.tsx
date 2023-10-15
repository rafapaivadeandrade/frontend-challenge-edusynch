interface Option {
  current_price: number | string;
  price_change_percentage_24h: number;
  name: string;
  image: string;
  symbol: string;
  boolean?: boolean;
}

interface TransferOption {
  service?: string;
  boolean?: boolean;
}

interface InputNumberProps {
  value: number;
  onChange: (value: number) => void;
}

interface CardProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
}

interface CardContainerProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  }[];
}

interface LayoutProps {
  children: React.ReactNode;
}

interface NavProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SelectProps {
  name?: string;
  options?: TransferOption[];
  exchangeRates?: { [key: string]: Option };
  setSelectedItem?: (item: Option) => void;
  selectedItem?: Option;
  isTransfered?: TransferOption[];
  setIsTransfered?: (item: TransferOption) => void;
}

interface User {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

interface MenuProps {
  isOpen: boolean;
}

export type {
  Option,
  TransferOption,
  InputNumberProps,
  CardProps,
  CardContainerProps,
  LayoutProps,
  NavProps,
  SelectProps,
  User,
  MenuProps,
};
