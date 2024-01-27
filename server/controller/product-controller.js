
import products from "../model/product-schema.js";

export const getProducts = async (req, res) => {
    try {
        const pro = await products.find({});

        res.status(200).json(pro);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await products.findOne({ 'id': id })
        // console.log(product);

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}