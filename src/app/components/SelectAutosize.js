import React from "react";

const Options = [
    { value: "Brands", label: "Brands" },
    { value: "Amenities", label: "Amenities" },
    { value: "Courses", label: "Courses" },
    { value: "Degree programs", label: "Degree programs" },
    { value: "Destinations", label: "Destinations" },
    { value: "Featured hotels", label: "Featured hotels" },
    { value: "Insurance coverage", label: "Insurance coverage" },
    { value: "Neighborhoods", label: "Neighborhoods" },
    { value: "Service catalog", label: "Service catalog" },
    { value: "Shows", label: "Shows" },
    { value: "Styles", label: "Styles" },
    { value: "Types", label: "Types" },
];

class Select extends React.Component {
    constructor(props) {
        super();
        this.state = {
            selected: "Insurance coverage"
        };
    }
    setWidth = () => {
        const optionEle = document.getElementById("selectedOptionHidden");
        const width = optionEle.offsetWidth + 20; // padding width or arrows
        this.setState({ width: `${width}px` });
    };
    handleSelect = e => {
        this.setState({ selected: e.target.value }, () => {
            this.setWidth();
        });
    };
    findOption = (items, value) => {
        let foundItem;
        (items || []).map((item) => {
            if (item.value === value) {
                return foundItem = item;
            }
        });
        return foundItem;
    };
    render() {
        const items = this.props.items;
        const selectedObj = this.findOption(items, this.state.selected);
        return (
            <React.Fragment>
                <select
                    style={{ width: this.state.width || "auto"}}
                    onChange={this.handleSelect}
                    value={this.state.selected}
                    name={Options}
                    className="brands-select"
                >
                    {items.map((item, index) => {
                        return (
                            <option key={`option:${item.value}`} value={item.value}>
                                {item.label}
                            </option>
                        );
                    })}
                </select> :
                <div>
                  <span style={{ visibility: "hidden" }} id="selectedOptionHidden">
                    {selectedObj.label}
                  </span>
                </div>
            </React.Fragment>
        );
    }
    a;
}

const SelectAutosize = () => (
    <div>
        <Select items={Options} />
    </div>
);

export default SelectAutosize;