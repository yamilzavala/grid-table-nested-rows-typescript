const SkeletonElement = ({type}: {type: string}) => {
    const classes = `${type}`
    return (
        <div className={classes}></div>
    );
};

export default SkeletonElement;