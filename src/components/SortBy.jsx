const SortBy = (props) => {

    const { setSearchParams, setSortByCriteria, setSortOrder, sortByCriteria, sortOrder} = props;
    
    const handleSortBy = (event) => {

        const value = event.target.value;

        setSortByCriteria(value)

        setSearchParams({ sort_by: value, order: sortOrder });

    }

    const handleOrderBy = () => {

        const newOrder = sortOrder === "asc" ? "desc" : "asc"

        setSortOrder(newOrder)

        setSearchParams({ sort_by: sortByCriteria, order: newOrder });

    }

    return (

    <div>

    <select name="sort" id="sort-by" onChange={handleSortBy}value={sortByCriteria}>sort
    <option value="created_at">date</option>
    <option value="comment_count">comments</option>
    <option value="votes">votes</option>
    </select>

    <select name="order" id="order-by" onChange={handleOrderBy}>
    <option value="asc">asc</option>
    <option value="desc">desc</option>

    </select>
    
    </div>

    )

}

export default SortBy