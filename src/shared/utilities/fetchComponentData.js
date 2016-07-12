export default function fetchComponentData(dispatch, components, params) {
    const needs = components
        .filter((c) => c)
        .reduce((prev, current) => (current.needs || []).concat(prev), []);
    const promises = needs.map(need => dispatch(need(params)));
    return Promise.all(promises);
}
