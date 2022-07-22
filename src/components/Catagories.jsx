import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Contanier = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({padding: "0px", flexDirection:"column"})}
`;

const Categories = () => {
    return (
        <Contanier>
            {categories.map(item=>(
                <CategoryItem item={item} key={item.id} />
            ))}
        </Contanier>
    );
};

export default Categories