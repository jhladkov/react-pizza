import Categories from "../components/Categories/Categories";
import SortPopup from "../components/SortPopup/SortPopup";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {setCategory, setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/card";


const sortItems = [
    {name: 'Популярности', type: 'popular'},
    {name: 'Цена', type: 'price'},
    {name: 'Алфавит', type: 'alphabet'},
]

const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
]

const Home = () => {
    const dispatch = useDispatch()

    const items = useSelector(({pizzas}) => { // mapStateToProps
        return {
            items: pizzas.items,
            loader: pizzas.isLoaded
        }

    })

    const {category, sortBy} = useSelector(({filters}) => filters)

    const cartItems = useSelector(({card}) => card.items)


    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))

    }, [category, sortBy])


    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])


    const handleAddPizzaToCart = obj => {
         dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    items={categoryNames}
                    onClick={onSelectCategory}
                />
                <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy} items={sortItems}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    !items.loader
                        ? <div className="lds-roller">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        : items.items && items.items.map(obj => {

                        if (category === obj.category  || category === null) {
                            return <PizzaBlock addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} onClickAddPizza={handleAddPizzaToCart} key={obj.id} {...obj} />
                        }
                    })

                }
            </div>
        </div>
    )
}

export default Home


