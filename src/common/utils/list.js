//@ flow
const LevelDropdownOptionList = () => {
  const level = 15;
  return Array.from(Array(level).keys()).reduce((acc, i) => {
    acc.push({
      label: `Easier than Level ${i + 1}`,
      value: i
    });
    return acc;
  }, []);
};

export default LevelDropdownOptionList;
