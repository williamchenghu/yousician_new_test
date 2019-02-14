//@ flow
const LevelDropdownOptionList = () => {
  const level = 15;
  return Array.from(Array(10).keys()).reduce((acc, i) => {
    acc.push({
      label: `Level ${i + 1}`,
      value: i
    });
    return acc;
  }, []);
};

export default LevelDropdownOptionList;
