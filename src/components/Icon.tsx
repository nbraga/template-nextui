import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
  iconName: "FaSun" | "FaMoon";
  size?: number;
}

export const Icon = ({ iconName, size = 20 }: Props) => {
  switch (iconName) {
    case "FaSun":
      return (
        <div>
          <FaSun size={size} />
        </div>
      );
    case "FaMoon":
      return (
        <div>
          <FaMoon size={size} />
        </div>
      );

    default:
      return null;
  }
};
