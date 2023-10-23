export async function handlerMatch({ params, request }, handlers) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const intent = formData.get('intent');
    const handler = handlers[intent];

    if (!handler) throw new Error(`No handlers for '${intent}' intent`);

    const redirect = handler({ params, request }, data);
    return redirect || null;
}
