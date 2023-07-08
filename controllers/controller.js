
/** get all questions */
export const getQuestions = async(req, res) => {
    res.json('questions api get request');
}

/** inser all questions */
export const insertQuestions = async(req, res) => {
    res.json('questions api post request')
}

/** delete all questions */
export const dropQuestions = async(req, res) => {
    res.json('questions api delete request');
}

/** get all result */
export const getResult = async(req, res) => {
    res.json('result api get request');
}

/** post all result */
export const storeResult = async(req, res) => {
    res.json('result api post request');
}

/** delete all result */
export const dropResult = async(req, res) => {
    res.json('result api delete request');
}