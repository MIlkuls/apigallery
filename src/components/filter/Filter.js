import "./filter.scss";

const Filter = ({ onSelectValue }) => {

  const filterItems = document.querySelectorAll(".filter__item");

    const filterData = [
    { name: "large ", label: "large photos" },
    { name: "small ", label: "small photos" },
    { name: "tiny ", label: "tiny photos" },
  ];

 

  const onValueChange = e => {
    const selectedValue = e.target.innerHTML;
    openFilter();
    onSelectValue(selectedValue);
  };

  const openFilter = () => {
    filterItems.forEach(el => {
      el.classList.toggle("filter__item-active");
    });
  };

   const filterItem = filterData.map(el => {
    return (
      <div key={el.name} className="filter__item" onClick={onValueChange}>
        {el.label}
      </div>
    );
  });

  return (
    <div className="filter">
      <div className="filter__item" onClick={openFilter}>
        filter categories
      </div>
      {filterItem}
    </div>
  );
};

export default Filter;

