const Pagination = ({ articulosPorPagina, paginaActual, setPaginaActual, totalArticulos }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalArticulos / articulosPorPagina); i++) {
        pageNumbers.push(i)
    }

    const onPreviousPage = () => {
        setPaginaActual(paginaActual - 1)
    }

    const onNextPage = () => {
        setPaginaActual(paginaActual + 1)
    }

    const onSpecificPage = (n) => {
        setPaginaActual(n)
    }

    return (
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <a href="#" className={`pagination-previous ${paginaActual === 1 ? 'is-disabled pointer-events-none' : ''}`} onClick={onPreviousPage}>Anterior</a>
            <a href="#" className={`pagination-next ${paginaActual >= pageNumbers.length ? 'is-disabled pointer-events-none' : ''}`} onClick={onNextPage}>Siguiente</a>
            <ul className="pagination-list">
                {pageNumbers.map(noPage => (
                    <li key={noPage}>
                        <a href="#" className={`pagination-link ${noPage === paginaActual ? 'is-current' : ''}`}onClick={() => onSpecificPage(noPage)}>{noPage}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Pagination;