import React from 'react';
import classNames from 'classnames';
import PropTypes, { func } from 'prop-types';
import tabelaGear from './tableGear';
import { trackUser, trackEvent} from './analytics';



Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function DateToStringFormated(date) {
    return date.toLocaleDateString("pt", {
        day: "2-digit",
        month: 'short'
    }).replace(" de ", "/");
}

function isSameDay(dateToCheck, dateToCheck2) {
    return (dateToCheck.getDate() == dateToCheck2.getDate() 
        && dateToCheck.getMonth() == dateToCheck2.getMonth()
        && dateToCheck.getFullYear() == dateToCheck2.getFullYear());
}

function isToday(dateToCheck) {
    return isSameDay(dateToCheck, (new Date()));
}

const weekDay = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const styleClassDay = function(inProp) {
    let redThing = ['F', 0, 6];
    return redThing.includes(inProp) ? "tdF" : "";
};

const styleClassWeekDay = function(inProp) {
    let trClassList = {0: 'trSunday', 1: 'trMonday', 2: 'trTuesday', 3: 'trWednesday', 4: 'trThursday', 5: 'trFriday', 6: 'trSaturday'};
    return trClassList[inProp.getDay()]
};
const styleClassToday = function(inProp) {
    return isToday(inProp) ? "tdToday": "";
}
const eventClick = function(inLog) {
    console.log("Click:" + inLog);
    trackEvent('Click', inLog, 'label1');
    return true;
}
const yearTD = (day) => <th className={'tdDate'} onClick={() => eventClick("Ano"+day.getFullYear())}>{day.getFullYear()}</th>;
const weekDayTD = (day) => {           
    let wd = day.getDay();
    let weekLabel = weekDay[wd].toUpperCase();
    return <td className={[styleClassDay(wd), 'tdWeekCol'].join(' ')}>{weekLabel}</td>
}
const dayTDfunc = (day) =>
            day.schedule.map(
                (scale, i) =>
                    <td key={i} className={styleClassDay(scale)}>{scale}</td>
            );
const groupsTD = (groups) => 
    groups.map((groupName, i) =>
        <th key={i} onClick={() => eventClick("Grupo "+groupName)}>{groupName}</th>
    );
const daysTR = (daysIn) => daysIn.map((day, i) =>
    <tr key={i} className={[styleClassWeekDay(day.day), 'trTable'].join(' ')}>
    <td key={i} className={['tdDate', styleClassToday(day.day)].join(' ')} > {DateToStringFormated(day.day)}</td> 
        {weekDayTD(day.day)} 
        {dayTDfunc(day)} 
    </tr>
);

/* <th>{objMonthScales[0].day.toLocaleDateString("pt")}</th> */
const monthTRHeader = (objMonthScales) =>
    (   
        <tr className={'trHead'}>
            {yearTD(objMonthScales[0].day)}
            <th>&nbsp;</th> 
            {groupsTD(objMonthScales[0].groups)} 
        </tr> 
        
    );
const monthTRsComplete = (daysIn) => ([monthTRHeader(daysIn), daysTR(daysIn)]);
const tBodyTable = (monthsTRsIn) =>  (<tbody>{monthsTRsIn}</tbody>)


function getDistFromBottom () {
  
    var scrollPosition = window.pageYOffset;
    var windowSize     = window.innerHeight;
    var bodyHeight     = document.body.offsetHeight;
    return Math.max(bodyHeight - (scrollPosition + windowSize), 0);  
  }

document.addEventListener('scroll', function() {
    let distToBottom = getDistFromBottom();
    if (distToBottom > 0 && distToBottom <= 1000) { // Near end;
       
    }
});




class Tabela2 extends React.Component {

    constructor(props) {
        super(props);
        
        const { month, tableName } = this.props;

        tabelaGear.populateTableDate(tableName);
        const dateIn = new Date(); // GetToday
        const days = tabelaGear.getMonthScales(dateIn);

        let beforeFirstMounthDay = new Date(dateIn.getFullYear(), dateIn.getMonth()-1, 1);
        let daysbefore = tabelaGear.getMonthScales(beforeFirstMounthDay);

        
        this.state = { 
            tableInput: tableName,
            dayOne: dateIn,
            actualDay: dateIn,
            monthsTRs: [monthTRsComplete(daysbefore), monthTRsComplete(days)],
        }
        //Load more 1 month
        const extTick = this.tick.bind(this);
        extTick();
    }

    tick()   {
        const dateIn = this.state.actualDay;
        let nextFirstMounthDay = new Date(dateIn.getFullYear(), dateIn.getMonth()+1, 1);
        let nextMonthScale = tabelaGear.getMonthScales(nextFirstMounthDay);
        let newMonthsObj = this.state.monthsTRs;
        newMonthsObj.push(monthTRsComplete(nextMonthScale));
        this.setState({actualDay: nextFirstMounthDay, monthsTRs: newMonthsObj });
        
        // Track month loading
        let trackAction = dateIn.getFullYear()+"-"+(dateIn.getMonth()+1);
        console.log(trackAction);
        trackEvent('Navigation', trackAction, 'label1');
         
     }

    componentDidMount() {
        const extTick = this.tick.bind(this);
        document.addEventListener('scroll', function() {
            let distToBottom = getDistFromBottom();
            //console.log(distToBottom);
            if (distToBottom > 0 && distToBottom <= 1400) { // Near end;
               console.log('dentro do reac');
               extTick();
            }
        });
    
        let timer = setTimeout(function () {
            window.scrollTo(0, document.getElementsByClassName("tdToday")[0].offsetTop - 135); //era 88 
        }, 50);
        
    }


    render() {  
        return ( 
/*            <div className="tbContainer">*/
            <table className={'tbMain'}>
                {tBodyTable(this.state.monthsTRs)}
            </table>
            /*</div>*/
        )
    }
}


Tabela2.propTypes = {
    //classes: PropTypes.object.isRequired,
};


export default Tabela2;