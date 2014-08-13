/**
 *  Copyright (c) 2014 Milo van der Linden (milo@dogodigi.net)
 * 
 *  This file is part of safetymapDBK
 *  
 *  safetymapDBK is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  safetymapDBK is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with safetymapDBK. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/**
 * 
 * @param {type} req
 * @param {type} res
 * @returns {undefined}
 */
exports.getGroupByClass1 = function(req, res) {
    //where identificatie = 1369659645
    if (req.query) {
        var query_str = 'select classification1 as name, count(*) from incidents."Interventions" where not classification1 is null and length(classification1) <> 0 group by classification1 order by classification1';
        global.pool.query(query_str,
            function(err, result){
                if(err) {
                    res.json(err);
                } else {
                    res.json(result.rows);
                }
                return;
            }
        );
    }
};
/**
 * 
 * @param {type} req
 * @param {type} res
 * @returns {undefined}
 */
exports.getGroupByClass2 = function(req, res) {
    //where identificatie = 1369659645
    if (req.query) {
        var query_str = 'select classification2 as name, count(*) from incidents."Interventions" where not classification2 is null and length(classification2) <> 0 group by classification2 order by classification2';
        global.pool.query(query_str,
            function(err, result){
                if(err) {
                    res.json(err);
                } else {
                    res.json(result.rows);
                }
                return;
            }
        );
    }
};
/**
 * 
 * @param {type} req
 * @param {type} res
 * @returns {undefined}
 */
exports.getGroupByClass3 = function(req, res) {
    //where identificatie = 1369659645
    if (req.query) {
        var query_str = 'select classification3 as name, count(*) from incidents."Interventions" where not classification3 is null and length(classification3) <> 0 group by classification3 order by classification3';
        global.pool.query(query_str,
            function(err, result){
                if(err) {
                    res.json(err);
                } else {
                    res.json(result.rows);
                }
                return;
            }
        );
    }
};

/**
 * 
 * @param {type} req
 * @param {type} res
 * @returns {undefined}
 */
exports.getGroupByPriority = function(req, res) {
    //where identificatie = 1369659645
    if (req.query) {
        var query_str = 'select priority as name, count(*) from incidents."Interventions" where not priority is null and length(priority) <> 0 group by priority order by priority';
        global.pool.query(query_str,
            function(err, result){
                if(err) {
                    res.json(err);
                } else {
                    res.json(result.rows);
                }
                return;
            }
        );
    }
};

/**
 * 
 * @param {type} req
 * @param {type} res
 * @returns {undefined}
 */
exports.getGroupByFirestation = function(req, res) {
    //where identificatie = 1369659645
    if (req.query) {
        var query_str = 'select firestation as name, count(*) from incidents."Interventions" group by firestation order by firestation';
        global.pool.query(query_str,
            function(err, result){
                if(err) {
                    res.json(err);
                } else {
                    res.json(result.rows);
                }
                return;
            }
        );
    }
};