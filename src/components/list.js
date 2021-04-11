import { useState } from "react";
import '../css/list.css';
import AddItemForm from "./add-item";
import Button from "./button";
import Card from "./card";
import ListWrapper from "./list-wrapper";
import Results from "./results";

const ListComponent = () => {
    const [listA, setListA] = useState([]);
    const [listB, setListB] = useState([]);
    const [comparedResultsList, setComparedResultsList] = useState(null);

    const addListItem = (element, cb, targetList) => {
        if (targetList === "A") {
            const newList = [element, ...listA];
            setListA(newList);
        } else {
            const newList = [element, ...listB];
            setListB(newList);
        }
        cb("");
    };

    const computeDifference = () => {
        const onlyInA = listA.filter(comparer(listB));
        const onlyInB = listB.filter(comparer(listA));
        let intersection = listA.filter(el => listB.includes(el.toLowerCase()));
        let difference = listA
            .filter(el => !listB.includes(el.toLowerCase()))
            .concat(listB.filter(el => !listA.includes(el.toLowerCase())));
        const results = {
            onlyInA,
            onlyInB,
            intersection,
            difference
        }
        setComparedResultsList(results)
    }

    const comparer = (targetList) => {
        return (sourceEl) => {
            return targetList.filter((targetEl) => {
                return targetEl.toLowerCase() === sourceEl.toLowerCase()
            }).length === 0;
        }
    }

    return (
        <div className="main">
            <div className="container lists">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="heading">List Difference Calculator</h1>
                    </div>
                    <Card title="List A" col_width={6}>
                        <AddItemForm addListItem={addListItem} targetList="A" />
                        <ListWrapper list={listA} />
                    </Card>
                    <Card title="List B" col_width={6}>
                        <AddItemForm addListItem={addListItem} targetList="B" />
                        <ListWrapper list={listB} />
                    </Card>
                    <Button type="button" className="btn-compute" title="Compute" onClick={computeDifference} disabled={!listA.length || !listB.length} />

                </div>

                {comparedResultsList ? (
                    <div className="row comparison-results">
                        <div className="col-md-12">
                            <h1>Results</h1>
                        </div>
                        <Results list={comparedResultsList} />
                    </div>
                ) : null}

            </div>
        </div>
    );
};

export default ListComponent;
