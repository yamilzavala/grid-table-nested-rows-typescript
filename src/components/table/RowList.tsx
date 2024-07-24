import React, {useEffect} from 'react';
import Header from './Header';
import Row from './Row';
import { RowListProps } from '../../types/types';


const RowList = ({rows, goToTop, allCollapse, columns, showLastColumn}: RowListProps) => {

    const handleTop = () => {
        const top_elment = document.getElementById('topel');
        top_elment?.scrollIntoView({
            behavior: "smooth"
        });
    };

    useEffect(() => {
        handleTop()
    },[goToTop])

    return (
        <div className="rows-container scroll-container">
            <div id='topel'></div>
            <Header columns={columns} showLastColumn={showLastColumn}/>
            {/* rows */}
            {rows && (
                <Row 
                    wbsElement={rows?.wbsElement} 
                    children={rows.children} 
                    description={rows.description}
                    legalDescription={rows.legalDescription}
                    id={rows.id}
                    level={rows.level}
                    levelDescription={rows.levelDescription}     
                    collapse={allCollapse} 
                    showLastColumn={showLastColumn}/>
            )}
            
        </div>
    );
};

export default RowList;