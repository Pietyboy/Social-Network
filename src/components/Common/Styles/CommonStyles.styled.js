import styled from "styled-components";

export const MainContentGridWrapper = styled.section`
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 60px auto 60px;
    margin: 16px 0;
    margin-right: 20px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    border: 1px solid #4b515a;
    border-radius: 8px;
`;