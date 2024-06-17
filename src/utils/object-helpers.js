export const updateObjectInArray = (items, itemId, objectPropName, newObjectProps) => 
    items.map(el => el[objectPropName] === itemId ? { ...el, ...newObjectProps } : el)