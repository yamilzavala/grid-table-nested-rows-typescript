export type RowProps = {
    id: string;
    wbsElement: string;
    level: number;
    levelDescription: string;
    description: string;
    legalDescription: string;
    children: RowProps[] | null;
    showLastColumn?: boolean;
    collapse?: boolean;
}

export type CellProps = {
    value: string;
    position: number;
    level: number;
    expanded: boolean;
    id: string;
    idContainer?: string | null;
    handleShowChildren?: (idContainer: string | null) => void ;
    showLastColumn?: boolean;
}

export type RowListProps = {
    rows: RowProps | null;
    goToTop: boolean;
    allCollapse: boolean;
    columns: string[];
    showLastColumn: boolean;
}

export type TableProps = {
    // rows: DataLevelsNestedType[] | null;
    rows: RowProps | null;
    columns: string[];
    showLastColumn: boolean
}

export type HeaderProps = {
    columns:string[];
    showLastColumn: boolean;
}

export type CollapseButtonProps = {
    handleShowChildren: ((idContainer: string | null) => void) | undefined;
    id: string;
    idContainer: string | null;
    expanded: boolean;
}

export type CollapseAllButtonProps = {
    allCollapse: boolean;
    handleCollapse: () => void;
}

export type GoToTopButtonProps = {
    handleSetGoToTop: () => void;
}

