const PageSwitcher = ({currentPage, setCurrentPage, allMedia}) => {
   
    const onChangePage = (type) => {
        type === 'next' ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage - 1);
    }
    return <div>
        <button type="button" onClick={()=> onChangePage()}>back</button>
        <div>
            <span>{currentPage}</span>
            з
            <span>{Math.ceil(allMedia / 5)}</span>
        </div>
        <button type="button" onClick={()=> onChangePage("next")}>далі</button>
    
</div>
}

export default PageSwitcher;