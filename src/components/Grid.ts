import styled from 'styled-components';


interface ContainerProps {
    paddingNone?: boolean;
}

export const Container = styled.div<ContainerProps>`
    margin-right: auto;
    box-sizing: border-box;
    width: 100%;
    padding: ${(props: ContainerProps) => props.paddingNone? ' ':'0 15px 0 15px'};
    
    
`;


interface RowProps {
    center?: boolean;
}

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: ${(props: RowProps) => props.center ? 'center' : 'flex-start'};

`;


function getWidthGrid(value: number){
    if(!value) return;
    let width = value/12*100;
    return`flex-basis: ${width}%;
    max-width: ${width}%;`;

}


interface ColumnProps {
    paddingNone?: boolean;
    align?: string;
    mobile?: number;
    tablet?: number;
    desktop?: number;

}

export const Column = styled.div<ColumnProps>`
    padding: ${(props: ColumnProps)=> props.paddingNone? ' ':'.25rem;'};
    min-height: 1px;
    box-sizing: border-box;
    text-align: ${(props: ColumnProps) => props.align ? props.align : 'left'};


    @media only screen and (max-width: 768px){
        ${({mobile})=> mobile && getWidthGrid(mobile)}
    }

    @media only screen and (min-width: 768px){
        ${({tablet})=> tablet && getWidthGrid(tablet)}
    }

    @media only screen and (min-width: 1000px){
        ${({desktop})=> desktop && getWidthGrid(desktop)}
    }



`
export const Center = styled.div`
    margin: 0 auto;
    width: 100%;
`