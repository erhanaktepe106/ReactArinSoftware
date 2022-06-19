import React from 'react'
import ReactDOM from 'react-dom'
import Props from './props/props';
import Collaps from './props/collaps';

const App = () => {

    return (
        <div>
            <Collaps collapsTitle="Collapse Title 1" collapsHref="concat1">
                <div className="card-group" >
                    <Props title="Başlık 1" description="Desc1" lastUpdate="1 min ago" image="https://picsum.photos/id/1/200/300" />
                </div>
            </Collaps>

            <Collaps collapsTitle="Collapse Title2" collapsHref="concat2">
                <div className="card-group" >
                    <Props title="Başlık 3" description="Desc2" lastUpdate="2 min ago" image="https://picsum.photos/id/10/200/300" />
                </div>
            </Collaps>

            <Collaps collapsTitle="Collapse Title 3" collapsHref="concat3">
                <div className="card-group" >
                    <Props title="Başlık 3" description="Desc3" lastUpdate="3 min ago" image="https://picsum.photos/id/100/200/300" />
                </div>
            </Collaps>

        </div>
    )

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)