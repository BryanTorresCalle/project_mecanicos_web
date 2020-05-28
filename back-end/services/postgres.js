const { Pool } = require("pg");

class ServicioPG {
  constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "TallerMecanicos",
      password: "0123",
      port: 5432,
    });
  }
  async runsql(sql) {
    let answer = await this.pool.query(sql);
    return answer;
  }

  async runsql(sql, values) {
    let answer = await this.pool.query(sql, values);
    return answer;
  }
}
module.exports = ServicioPG;