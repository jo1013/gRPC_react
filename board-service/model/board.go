package model

import (
	"database/sql"

	_ "github.com/lib/pq" // PostgreSQL 드라이버
)

type Board struct {
	ID      string
	Title   string
	Content string
	Author  string
}

// DBConn은 데이터베이스 연결을 위한 변수입니다.
var DBConn *sql.DB

// InitDB는 데이터베이스 연결을 초기화합니다.
func InitDB(dataSourceName string) error {
	var err error
	DBConn, err = sql.Open("postgres", dataSourceName)
	if err != nil {
		return err
	}

	return DBConn.Ping()
}

// CreateBoard는 새로운 게시글을 데이터베이스에 저장합니다.
func CreateBoard(board *Board) error {
	query := `INSERT INTO boards (id, title, content, author) VALUES ($1, $2, $3, $4)`
	_, err := DBConn.Exec(query, board.ID, board.Title, board.Content, board.Author)
	return err
}
