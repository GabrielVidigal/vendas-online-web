import { Tag } from "antd";
import { CategoryType } from "../../../shared/types/CategoryType";

interface CategoryColumProps {
    category?: CategoryType
}

const colors: string[] = [
    'green',
    "red",
    'orange',
    'geekblue',
    'gold',
    'volcano',
    'purple',
    'blue',
    'cyan',
    'lime',
    "magenta",

]

const CategoryColum = ({ category }: CategoryColumProps) => {
    if (!category){
        return null;
    }
    const currentColor = colors[category.id - 1] || colors[0];
    return (
        <Tag color={currentColor}>{category.name}</Tag>
    )
}

export default CategoryColum;